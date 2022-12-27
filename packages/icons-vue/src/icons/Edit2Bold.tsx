// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Edit2BoldSvg from '@ant-design/icons-svg/lib/asn/Edit2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Edit2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Edit2Bold: Edit2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Edit2BoldSvg}></AntdIcon>;
};

Edit2Bold.displayName = 'Edit2Bold';
Edit2Bold.inheritAttrs = false;
export default Edit2Bold;