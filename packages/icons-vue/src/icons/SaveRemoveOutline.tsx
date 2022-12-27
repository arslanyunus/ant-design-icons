// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/SaveRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveRemoveOutline: SaveRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveRemoveOutlineSvg}></AntdIcon>;
};

SaveRemoveOutline.displayName = 'SaveRemoveOutline';
SaveRemoveOutline.inheritAttrs = false;
export default SaveRemoveOutline;