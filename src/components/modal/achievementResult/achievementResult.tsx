import { useEffect, useState } from "react";
import CenterModal from "../../common/modal/center/centerModal";
import Style from "./achievementResult.style";
import EachObjectsAchievementResult from "./eachObjectsAchievementResult/eachObjectsAchievementResult";
import GeneralAchievementResult from "./generalAchievementResult/generalAchievementResult";
import { handleRequestGeneralAchievementResult } from "../../../api/achievementResult/generalResult";
import { convertDateToString } from "../../../utils/dateUitls";
import { handleRequestEachObjectsAchievementResult } from "../../../api/achievementResult/eachObjectsResult";
import { EachObjectAchievementResultInterface } from "../../../types/achievementResult";

const AchievementResult = ({
  isAchievementResultModalOpen,
  handleControlAchievementResultModal,
}: {
  isAchievementResultModalOpen: boolean;
  handleControlAchievementResultModal: () => void;
}) => {
  /** 현재 페이지 번호 */
  const [currentPage, setCurrentPage] = useState(1);

  /** 전체 달성률 */
  const [generalAchievementResult, setGeneralAchievementResult] = useState<
    null | number
  >(null);

  /** 목표별 달성률 */
  const [eachObjectsAchievementResult, setEachObjectsAchievementResult] =
    useState<EachObjectAchievementResultInterface[]>([]);

  /** 클릭 시, 다음 페이지로 넘어가는 함수 */
  const handleFlipPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  /** 전체 달성률, 목표별 달성률 쿼리 요청 */
  useEffect(() => {
    const todayDate = convertDateToString(new Date());

    let setStateTimer: number;

    const fetchData = async () => {
      if (currentPage === 1) {
        const fetchGeneralAchievementResult =
          await handleRequestGeneralAchievementResult(todayDate);
        setStateTimer = window.setTimeout(() => {
          setGeneralAchievementResult(fetchGeneralAchievementResult.data);
        }, 300);
      } else if (currentPage === 2) {
        const fetchEachObjectsAchievementResult =
          await handleRequestEachObjectsAchievementResult(todayDate);

        setEachObjectsAchievementResult(fetchEachObjectsAchievementResult.data);
      }
    };
    fetchData();

    return () => clearTimeout(setStateTimer);
  }, [currentPage]);

  return (
    <CenterModal
      display={isAchievementResultModalOpen ? "flex" : "none"}
      top={250}
      controlFunc={handleControlAchievementResultModal}
      isForbidExternalClick={true}
      isHideCloseButton={currentPage === 1 ? true : false}
    >
      <Style.ResultContainer>
        {currentPage === 1 ? (
          <GeneralAchievementResult
            generalAchievementResult={generalAchievementResult}
            handleFlipPage={handleFlipPage}
          />
        ) : (
          <EachObjectsAchievementResult
            eachObjectsAchievementResult={eachObjectsAchievementResult}
          />
        )}
      </Style.ResultContainer>
    </CenterModal>
  );
};

export default AchievementResult;
