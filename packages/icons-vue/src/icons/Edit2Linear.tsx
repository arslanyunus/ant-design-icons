// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Edit2LinearSvg from '@ant-design/icons-svg/lib/asn/Edit2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Edit2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Edit2Linear: Edit2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Edit2LinearSvg}></AntdIcon>;
};

Edit2Linear.displayName = 'Edit2Linear';
Edit2Linear.inheritAttrs = false;
export default Edit2Linear;