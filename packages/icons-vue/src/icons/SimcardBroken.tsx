// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SimcardBrokenSvg from '@ant-design/icons-svg/lib/asn/SimcardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SimcardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SimcardBroken: SimcardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SimcardBrokenSvg}></AntdIcon>;
};

SimcardBroken.displayName = 'SimcardBroken';
SimcardBroken.inheritAttrs = false;
export default SimcardBroken;