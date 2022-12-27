// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AddCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/AddCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AddCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AddCircleBroken: AddCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AddCircleBrokenSvg}></AntdIcon>;
};

AddCircleBroken.displayName = 'AddCircleBroken';
AddCircleBroken.inheritAttrs = false;
export default AddCircleBroken;