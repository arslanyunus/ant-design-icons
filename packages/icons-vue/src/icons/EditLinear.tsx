// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EditLinearSvg from '@ant-design/icons-svg/lib/asn/EditLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EditLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EditLinear: EditLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditLinearSvg}></AntdIcon>;
};

EditLinear.displayName = 'EditLinear';
EditLinear.inheritAttrs = false;
export default EditLinear;