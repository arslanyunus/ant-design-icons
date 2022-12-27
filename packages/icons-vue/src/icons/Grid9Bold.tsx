// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid9BoldSvg from '@ant-design/icons-svg/lib/asn/Grid9Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid9BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid9Bold: Grid9BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid9BoldSvg}></AntdIcon>;
};

Grid9Bold.displayName = 'Grid9Bold';
Grid9Bold.inheritAttrs = false;
export default Grid9Bold;