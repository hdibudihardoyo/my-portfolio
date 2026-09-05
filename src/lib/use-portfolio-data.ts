import { useTranslation } from "react-i18next"
import type {
  AchievementItem,
  EducationItem,
  ExperienceItem,
  GuestbookEntry,
  ProfileData,
  Project,
} from "@/data/portfolio"

export function usePortfolioData() {
  const { t } = useTranslation()

  return {
    profile: t("data.profile", { returnObjects: true }) as ProfileData,
    education: t("data.education", { returnObjects: true }) as EducationItem[],
    experience: t("data.experience", { returnObjects: true }) as ExperienceItem[],
    projects: t("data.projects", { returnObjects: true }) as Project[],
    achievements: t("data.achievements", {
      returnObjects: true,
    }) as AchievementItem[],
    guestbook: t("data.guestbook", { returnObjects: true }) as GuestbookEntry[],
  }
}