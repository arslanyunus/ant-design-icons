// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HappyemojiBulkSvg from '@ant-design/icons-svg/lib/asn/HappyemojiBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HappyemojiBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HappyemojiBulk: HappyemojiBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HappyemojiBulkSvg}></AntdIcon>;
};

HappyemojiBulk.displayName = 'HappyemojiBulk';
HappyemojiBulk.inheritAttrs = false;
export default HappyemojiBulk;