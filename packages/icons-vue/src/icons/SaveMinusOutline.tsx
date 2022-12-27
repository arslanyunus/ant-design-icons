// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveMinusOutlineSvg from '@ant-design/icons-svg/lib/asn/SaveMinusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveMinusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveMinusOutline: SaveMinusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveMinusOutlineSvg}></AntdIcon>;
};

SaveMinusOutline.displayName = 'SaveMinusOutline';
SaveMinusOutline.inheritAttrs = false;
export default SaveMinusOutline;