// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddCircleBulkSvg from '@ant-design/icons-svg/lib/asn/AddCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddCircleBulk: AddCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddCircleBulkSvg}></AntdIcon>;
};

AddCircleBulk.displayName = 'AddCircleBulk';
AddCircleBulk.inheritAttrs = false;
export default AddCircleBulk;