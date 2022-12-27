// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Edit2OutlineSvg from '@ant-design/icons-svg/lib/asn/Edit2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Edit2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Edit2Outline: Edit2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Edit2OutlineSvg}></AntdIcon>;
};

Edit2Outline.displayName = 'Edit2Outline';
Edit2Outline.inheritAttrs = false;
export default Edit2Outline;