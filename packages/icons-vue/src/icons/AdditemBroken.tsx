// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AdditemBrokenSvg from '@ant-design/icons-svg/lib/asn/AdditemBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AdditemBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AdditemBroken: AdditemBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AdditemBrokenSvg}></AntdIcon>;
};

AdditemBroken.displayName = 'AdditemBroken';
AdditemBroken.inheritAttrs = false;
export default AdditemBroken;