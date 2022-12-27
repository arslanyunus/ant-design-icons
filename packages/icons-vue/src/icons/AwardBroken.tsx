// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AwardBrokenSvg from '@ant-design/icons-svg/lib/asn/AwardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AwardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AwardBroken: AwardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AwardBrokenSvg}></AntdIcon>;
};

AwardBroken.displayName = 'AwardBroken';
AwardBroken.inheritAttrs = false;
export default AwardBroken;