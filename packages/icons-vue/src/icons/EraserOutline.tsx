// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EraserOutlineSvg from '@ant-design/icons-svg/lib/asn/EraserOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EraserOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EraserOutline: EraserOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EraserOutlineSvg}></AntdIcon>;
};

EraserOutline.displayName = 'EraserOutline';
EraserOutline.inheritAttrs = false;
export default EraserOutline;