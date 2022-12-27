// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmallcapsBulkSvg from '@ant-design/icons-svg/lib/asn/SmallcapsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmallcapsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmallcapsBulk: SmallcapsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmallcapsBulkSvg}></AntdIcon>;
};

SmallcapsBulk.displayName = 'SmallcapsBulk';
SmallcapsBulk.inheritAttrs = false;
export default SmallcapsBulk;