// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseSquareBulkSvg from '@ant-design/icons-svg/lib/asn/MouseSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseSquareBulk: MouseSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseSquareBulkSvg}></AntdIcon>;
};

MouseSquareBulk.displayName = 'MouseSquareBulk';
MouseSquareBulk.inheritAttrs = false;
export default MouseSquareBulk;