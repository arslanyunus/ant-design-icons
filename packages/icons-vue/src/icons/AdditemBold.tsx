// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AdditemBoldSvg from '@ant-design/icons-svg/lib/asn/AdditemBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AdditemBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AdditemBold: AdditemBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AdditemBoldSvg}></AntdIcon>;
};

AdditemBold.displayName = 'AdditemBold';
AdditemBold.inheritAttrs = false;
export default AdditemBold;