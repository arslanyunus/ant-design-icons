// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenAddBoldSvg from '@ant-design/icons-svg/lib/asn/PenAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenAddBold: PenAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenAddBoldSvg}></AntdIcon>;
};

PenAddBold.displayName = 'PenAddBold';
PenAddBold.inheritAttrs = false;
export default PenAddBold;