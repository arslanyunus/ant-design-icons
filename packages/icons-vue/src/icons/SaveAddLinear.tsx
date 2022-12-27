// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveAddLinearSvg from '@ant-design/icons-svg/lib/asn/SaveAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveAddLinear: SaveAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveAddLinearSvg}></AntdIcon>;
};

SaveAddLinear.displayName = 'SaveAddLinear';
SaveAddLinear.inheritAttrs = false;
export default SaveAddLinear;