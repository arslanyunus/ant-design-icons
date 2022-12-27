// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenToolBoldSvg from '@ant-design/icons-svg/lib/asn/PenToolBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenToolBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenToolBold: PenToolBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenToolBoldSvg}></AntdIcon>;
};

PenToolBold.displayName = 'PenToolBold';
PenToolBold.inheritAttrs = false;
export default PenToolBold;