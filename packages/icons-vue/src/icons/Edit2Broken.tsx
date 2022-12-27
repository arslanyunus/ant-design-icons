// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Edit2BrokenSvg from '@ant-design/icons-svg/lib/asn/Edit2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Edit2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Edit2Broken: Edit2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Edit2BrokenSvg}></AntdIcon>;
};

Edit2Broken.displayName = 'Edit2Broken';
Edit2Broken.inheritAttrs = false;
export default Edit2Broken;