// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveAddOutlineSvg from '@ant-design/icons-svg/lib/asn/SaveAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveAddOutline: SaveAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveAddOutlineSvg}></AntdIcon>;
};

SaveAddOutline.displayName = 'SaveAddOutline';
SaveAddOutline.inheritAttrs = false;
export default SaveAddOutline;