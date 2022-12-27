// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AdditemBulkSvg from '@ant-design/icons-svg/lib/asn/AdditemBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AdditemBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AdditemBulk: AdditemBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AdditemBulkSvg}></AntdIcon>;
};

AdditemBulk.displayName = 'AdditemBulk';
AdditemBulk.inheritAttrs = false;
export default AdditemBulk;