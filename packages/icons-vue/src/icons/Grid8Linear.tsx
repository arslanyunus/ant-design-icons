// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid8LinearSvg from '@ant-design/icons-svg/lib/asn/Grid8Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid8LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid8Linear: Grid8LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid8LinearSvg}></AntdIcon>;
};

Grid8Linear.displayName = 'Grid8Linear';
Grid8Linear.inheritAttrs = false;
export default Grid8Linear;