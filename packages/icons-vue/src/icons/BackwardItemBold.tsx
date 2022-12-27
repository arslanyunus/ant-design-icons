// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardItemBoldSvg from '@ant-design/icons-svg/lib/asn/BackwardItemBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardItemBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardItemBold: BackwardItemBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardItemBoldSvg}></AntdIcon>;
};

BackwardItemBold.displayName = 'BackwardItemBold';
BackwardItemBold.inheritAttrs = false;
export default BackwardItemBold;