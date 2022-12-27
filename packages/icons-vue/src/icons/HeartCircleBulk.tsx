// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartCircleBulkSvg from '@ant-design/icons-svg/lib/asn/HeartCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartCircleBulk: HeartCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartCircleBulkSvg}></AntdIcon>;
};

HeartCircleBulk.displayName = 'HeartCircleBulk';
HeartCircleBulk.inheritAttrs = false;
export default HeartCircleBulk;