// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EditBoldSvg from '@ant-design/icons-svg/lib/asn/EditBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EditBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EditBold: EditBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditBoldSvg}></AntdIcon>;
};

EditBold.displayName = 'EditBold';
EditBold.inheritAttrs = false;
export default EditBold;