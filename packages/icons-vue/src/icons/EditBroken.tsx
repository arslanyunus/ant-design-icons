// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EditBrokenSvg from '@ant-design/icons-svg/lib/asn/EditBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EditBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EditBroken: EditBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditBrokenSvg}></AntdIcon>;
};

EditBroken.displayName = 'EditBroken';
EditBroken.inheritAttrs = false;
export default EditBroken;