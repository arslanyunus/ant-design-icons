// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EditBulkSvg from '@ant-design/icons-svg/lib/asn/EditBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EditBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EditBulk: EditBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditBulkSvg}></AntdIcon>;
};

EditBulk.displayName = 'EditBulk';
EditBulk.inheritAttrs = false;
export default EditBulk;