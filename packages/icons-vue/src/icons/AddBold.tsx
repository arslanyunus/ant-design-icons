// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddBoldSvg from '@ant-design/icons-svg/lib/asn/AddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddBold: AddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddBoldSvg}></AntdIcon>;
};

AddBold.displayName = 'AddBold';
AddBold.inheritAttrs = false;
export default AddBold;