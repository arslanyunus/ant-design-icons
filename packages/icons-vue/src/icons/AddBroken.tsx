// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddBrokenSvg from '@ant-design/icons-svg/lib/asn/AddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddBroken: AddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddBrokenSvg}></AntdIcon>;
};

AddBroken.displayName = 'AddBroken';
AddBroken.inheritAttrs = false;
export default AddBroken;