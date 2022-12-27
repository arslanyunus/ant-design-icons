// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid6LinearSvg from '@ant-design/icons-svg/lib/asn/Grid6Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid6LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid6Linear: Grid6LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid6LinearSvg}></AntdIcon>;
};

Grid6Linear.displayName = 'Grid6Linear';
Grid6Linear.inheritAttrs = false;
export default Grid6Linear;