// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EraserBoldSvg from '@ant-design/icons-svg/lib/asn/EraserBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EraserBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EraserBold: EraserBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EraserBoldSvg}></AntdIcon>;
};

EraserBold.displayName = 'EraserBold';
EraserBold.inheritAttrs = false;
export default EraserBold;