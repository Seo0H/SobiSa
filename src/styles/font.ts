import styled from 'styled-components';

const DefaultFont = styled.span`
  font-family: 'Pretendard Variable';
  font-style: normal;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: ${({ theme }) => theme.colors.gray[4]};
`;

const NeoDunggeunmo = styled.span`
  font-family: 'NeoDunggeunmo';
  line-height: 150%;
  letter-spacing: -0.022em;
  font-weight: 400;
`;

export const GamjaFlower = styled.span`
  font-family: 'Gamja Flower';
  line-height: 150%;
  letter-spacing: -0.022em;
`;

// ------ 기본 폰트 ------
export const XSmall = styled(DefaultFont)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xxxs};
`;

export const Small = styled(DefaultFont)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const SmallOrange = styled(Small)`
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const Medium = styled(DefaultFont)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray[6]};
`;

export const MediumOrange = styled(Medium)`
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const Large = styled(DefaultFont)`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.gray[6]};
`;

export const LargeOrange = styled(Large)`
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const ExtraLarge = styled(DefaultFont)`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.ml};
  color: ${({ theme }) => theme.colors.gray[6]};
`;

// ------ 임명장 폰트 ------
export const AwardXXSmall = styled(NeoDunggeunmo)`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.colors.gray[4]};
`;

export const AwardXSmall = styled(NeoDunggeunmo)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray[5]};
`;

export const AwardSmall = styled(NeoDunggeunmo)`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.gray[5]};
`;

export const AwardSmallOrange = styled(AwardSmall)`
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const AwardMedium = styled(NeoDunggeunmo)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.gray[5]};
`;

export const AwardXLarge = styled(NeoDunggeunmo)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.gray[5]};
`;

export const AwardXXLarge = styled(NeoDunggeunmo)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.gray[5]};
`;

// 임명장 폰트
export const CertificateMediumLarge = styled(GamjaFlower)`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.ml};
  color: ${({ theme }) => theme.colors.gray[6]};
`;

export const CertificateExtraLarge = styled(GamjaFlower)`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray[6]};
`;
