// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WomanBrokenSvg from '@ant-design/icons-svg/lib/asn/WomanBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WomanBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WomanBroken: WomanBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WomanBrokenSvg}></AntdIcon>;
};

WomanBroken.displayName = 'WomanBroken';
WomanBroken.inheritAttrs = false;
export default WomanBroken;