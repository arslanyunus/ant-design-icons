// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardBrokenSvg from '@ant-design/icons-svg/lib/asn/BackwardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardBroken: BackwardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardBrokenSvg}></AntdIcon>;
};

BackwardBroken.displayName = 'BackwardBroken';
BackwardBroken.inheritAttrs = false;
export default BackwardBroken;