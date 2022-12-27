// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DislikeBulkSvg from '@ant-design/icons-svg/lib/asn/DislikeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DislikeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DislikeBulk: DislikeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DislikeBulkSvg}></AntdIcon>;
};

DislikeBulk.displayName = 'DislikeBulk';
DislikeBulk.inheritAttrs = false;
export default DislikeBulk;