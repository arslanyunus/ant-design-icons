// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeadphonesBulkSvg from '@ant-design/icons-svg/lib/asn/HeadphonesBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeadphonesBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeadphonesBulk: HeadphonesBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphonesBulkSvg}></AntdIcon>;
};

HeadphonesBulk.displayName = 'HeadphonesBulk';
HeadphonesBulk.inheritAttrs = false;
export default HeadphonesBulk;