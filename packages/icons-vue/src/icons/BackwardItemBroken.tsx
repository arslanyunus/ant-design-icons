// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardItemBrokenSvg from '@ant-design/icons-svg/lib/asn/BackwardItemBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardItemBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardItemBroken: BackwardItemBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardItemBrokenSvg}></AntdIcon>;
};

BackwardItemBroken.displayName = 'BackwardItemBroken';
BackwardItemBroken.inheritAttrs = false;
export default BackwardItemBroken;