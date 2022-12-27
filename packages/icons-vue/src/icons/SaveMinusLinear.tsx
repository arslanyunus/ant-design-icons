// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveMinusLinearSvg from '@ant-design/icons-svg/lib/asn/SaveMinusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveMinusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveMinusLinear: SaveMinusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveMinusLinearSvg}></AntdIcon>;
};

SaveMinusLinear.displayName = 'SaveMinusLinear';
SaveMinusLinear.inheritAttrs = false;
export default SaveMinusLinear;