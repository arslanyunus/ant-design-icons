// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseBulkSvg from '@ant-design/icons-svg/lib/asn/MouseBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseBulk: MouseBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseBulkSvg}></AntdIcon>;
};

MouseBulk.displayName = 'MouseBulk';
MouseBulk.inheritAttrs = false;
export default MouseBulk;