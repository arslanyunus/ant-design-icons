// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AwardBoldSvg from '@ant-design/icons-svg/lib/asn/AwardBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AwardBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AwardBold: AwardBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AwardBoldSvg}></AntdIcon>;
};

AwardBold.displayName = 'AwardBold';
AwardBold.inheritAttrs = false;
export default AwardBold;