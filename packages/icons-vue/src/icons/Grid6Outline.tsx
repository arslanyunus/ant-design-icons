// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid6OutlineSvg from '@ant-design/icons-svg/lib/asn/Grid6Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid6OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid6Outline: Grid6OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid6OutlineSvg}></AntdIcon>;
};

Grid6Outline.displayName = 'Grid6Outline';
Grid6Outline.inheritAttrs = false;
export default Grid6Outline;