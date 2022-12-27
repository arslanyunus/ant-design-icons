// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/SaveRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveRemoveLinear: SaveRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveRemoveLinearSvg}></AntdIcon>;
};

SaveRemoveLinear.displayName = 'SaveRemoveLinear';
SaveRemoveLinear.inheritAttrs = false;
export default SaveRemoveLinear;