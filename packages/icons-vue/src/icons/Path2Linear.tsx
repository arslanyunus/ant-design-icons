// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Path2LinearSvg from '@ant-design/icons-svg/lib/asn/Path2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Path2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Path2Linear: Path2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Path2LinearSvg}></AntdIcon>;
};

Path2Linear.displayName = 'Path2Linear';
Path2Linear.inheritAttrs = false;
export default Path2Linear;