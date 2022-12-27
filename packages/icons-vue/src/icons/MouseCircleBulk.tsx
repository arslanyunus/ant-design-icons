// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseCircleBulkSvg from '@ant-design/icons-svg/lib/asn/MouseCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseCircleBulk: MouseCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseCircleBulkSvg}></AntdIcon>;
};

MouseCircleBulk.displayName = 'MouseCircleBulk';
MouseCircleBulk.inheritAttrs = false;
export default MouseCircleBulk;