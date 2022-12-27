// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EditOutlineSvg from '@ant-design/icons-svg/lib/asn/EditOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EditOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EditOutline: EditOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditOutlineSvg}></AntdIcon>;
};

EditOutline.displayName = 'EditOutline';
EditOutline.inheritAttrs = false;
export default EditOutline;