// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddSquareBulkSvg from '@ant-design/icons-svg/lib/asn/AddSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddSquareBulk: AddSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddSquareBulkSvg}></AntdIcon>;
};

AddSquareBulk.displayName = 'AddSquareBulk';
AddSquareBulk.inheritAttrs = false;
export default AddSquareBulk;