// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardBoldSvg from '@ant-design/icons-svg/lib/asn/BackwardBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardBold: BackwardBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardBoldSvg}></AntdIcon>;
};

BackwardBold.displayName = 'BackwardBold';
BackwardBold.inheritAttrs = false;
export default BackwardBold;