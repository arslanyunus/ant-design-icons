// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddBulkSvg from '@ant-design/icons-svg/lib/asn/AddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddBulk: AddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddBulkSvg}></AntdIcon>;
};

AddBulk.displayName = 'AddBulk';
AddBulk.inheritAttrs = false;
export default AddBulk;