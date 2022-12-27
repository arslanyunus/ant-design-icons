// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoCircleBulkSvg from '@ant-design/icons-svg/lib/asn/InfoCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InfoCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InfoCircleBulk: InfoCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InfoCircleBulkSvg}></AntdIcon>;
};

InfoCircleBulk.displayName = 'InfoCircleBulk';
InfoCircleBulk.inheritAttrs = false;
export default InfoCircleBulk;